import { computed, Signal, signal } from '@angular/core';

function* idGenerator() {
  let i = 0;
  while (true) {
    yield (i++) + '';
  }
  return 'ERROR';
}
const generator = idGenerator();
const nextId = () => generator.next().value;

export type StoriesModel = Signal<readonly StorySignal[]> & {
  // asReadonly: () => Signal<StorySignal[]>;
  add: (...items: PrimitiveStory[]) => string[];
  remove: (id: string) => void;
  getPrimiteveStories: () => PrimitiveStory[];
  refinePostion: () => void;
};

export function stories(): StoriesModel {
  const model = signal<StorySignal[]>([]);

  return Object.assign(model.asReadonly(), {
    add: (...items: PrimitiveStory[]) => {
      const additional = items.map(story);
      additional.forEach((item, i) => item.setY((additional[i - 1]?.().y ?? -36) + 36));
      model.update(stories => stories.concat(...additional));
      return additional.map(s => s().id);
    },
    remove: (id: string) => {
      console.log(id);
      console.log(model().map(m => m().id));
      model.update(stories => stories.filter(m => m().id !== id));
    },
    refinePostion: () => {
      model.update(stories => {
        const sorted = stories.sort((a, b) => a().y - b().y);
        sorted.forEach((story, i, array) => {
          const above = array.slice(0, i)
            .filter(s => Math.abs(story().spForScale - s().spForScale) <= 1)
            .at(-1);
          if (above != null && story().y < above?.().y + 36) {
            story.setY(above().y + 36);
          }
        });
        return sorted;
      });
    },
    getPrimiteveStories: () => model().map(m => extractPrimitiveStory(m())),
  });
}

export type StorySignal = Signal<Story> & {
  set: (s: Partial<PrimitiveStory>) => void;
  setY: (y: number) => void;
};

function story(s: PrimitiveStory): StorySignal {
  const model = signal<ManagementInfo & PrimitiveStory>({
    ...s,
    id: nextId(),
    y: 0,
  });
  const sotrySig = computed(() => ({
    ...model(),
    spForScale: model().sp ?? model().orgSp,
  }));

  return Object.assign(sotrySig, {
    set: (s: Partial<PrimitiveStory>) => {
      // purify s
      const purified = extractPrimitiveStory(s);
      purified.sp = purified.sp != null ? Math.min(Math.max(purified.sp, 1), 24) : undefined;
      model.update(org => ({ ...org, ...purified }));
    },
    setY: (y: number) => model.update(org => ({ ...org, y: Math.max(y, 0) })),
  });
}

const a = story({ title: '', orgSp: 1 });
a().y;
export interface ManagementInfo {
  id: string;
  y: number;
}

export interface PrimitiveStory {
  title: string;
  /** original story point */
  orgSp: number;
  /** story point for the scale */
  sp?: number;
  link?: string;
}
export interface AdditionalStoryInfo {
  spForScale: number;
}

export type Story = PrimitiveStory & AdditionalStoryInfo & ManagementInfo;

const reference: Required<PrimitiveStory> = { title: '', link: '', sp: 0, orgSp: 0 };
function extractPrimitiveStory(target: Partial<PrimitiveStory>): PrimitiveStory {
  return (Object.keys(reference) as (keyof PrimitiveStory)[])
    .reduce((acc, key) => {
      return target[key] != null
        ? { ...acc, [key]: target[key] }
        : acc;
    }, {}) as PrimitiveStory;
}
export function validatePrimitiveStory(v: unknown): v is PrimitiveStory {
  // check type
  if (typeof v !== 'object' || v === null) { return false; }
  // check required props
  if (!('title' in v) || !('orgSp' in v)) { return false; }
  // check title
  if (typeof v.title !== 'string' || v.title.length === 0) { return false; }
  // check orgSp
  if (typeof v.orgSp !== 'number' || v.orgSp < 1 || v.orgSp > 24) { return false; }
  // check sp
  if ('sp' in v && v.sp != null && (typeof v.sp !== 'number' || v.sp < 1 || v.sp > 24)) { return false; }
  // check link
  if ('link' in v && v.link != null && (typeof v.link !== 'string')) { return false; }
  return true;
}
