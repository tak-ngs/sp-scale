# SP Scale

A web app for creating StoryPoint Scale, an agile practice.

## How to use

1. Add your reference story card from [+] button at the bottom right.
2. Grab the ● at the top left of the card and adjust its position.
3. Finally, copy the URL by clicking [Get URL] and share it.

Other operations can be performed from the button at the top right of the card.

## Install

```sh
docker run -p 80:80 takngs/sp-scale
```

### Adaptor

SP Scale shares all the data packed into the URL query.
The maximum length of a URL is limited by browsers and servers, so the number of reference stories is limited to a dozen or so.

On the other hand, you can also include minimal information in the URL query and retrieve other data from your project management system api.

### Make own Adapter

1: Create `adapter.js` and implement the following two functions:

```ts
/** fetch data from external project management system */
function fetchItems(items: T[]): Promise<PrimitiveItem[]>;
/** convert data to include in a sharing URL query */
function toQueryData(story: PrimitiveStory): T;
```

`T` is the structure of the data to be included in the URL query.

`PrimitiveStory` is as follows:

```ts
interface PrimitiveStory {
  title: string;
  /** original story point */
  orgSp: number;
  /** story point for the scale */
  sp?: number;
  link?: string;
}
```

2: Mount the created file to `/usr/share/nginx/html/adapter.js` and start the SP Scale docker image.

```bash
docker run -p 80:80 -v ./your_adapter.js:/usr/share/nginx/html/adapter.js:ro sp-scale
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

To build docker image run:

```bash
docker build ./ -t sp-scale
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## TODO

- [x] 追加のダイアログ
- [x] dark theme ready
- [x] グリッド幅をもっとかんたんに変えられるように
- [x] 編集
- [x] story dataの保持整理
- [x] 削除
- [x] queryパースエラーのハンドリング
- [x] URLコピーしたときにお知らせ
- [ ] デプロイ
- [ ] 日本語化
- [ ] dark theme 切り替え
- [ ] SPごとにグルーピング
- [ ] SP フィルタ
