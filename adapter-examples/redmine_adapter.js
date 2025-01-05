async function auth() {
  const existing = document.querySelector('dialog#auth-dialog');
  if (existing) {
    return await new Promise(resolve => existing.onclose = e => resolve(e.target.returnValue));
  }
  const dialog = document.createElement('dialog');
  const form = document.createElement('form');
  const username = document.createElement('input');
  const password = document.createElement('input');
  const button = document.createElement('button');

  dialog.id = 'auth-dialog';
  username.name = 'username';
  username.type = 'text';
  username.placeholder = 'username';

  password.name = 'password';
  password.type = 'password';
  password.placeholder = 'password';

  button.textContent = 'OK';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    dialog.close(btoa(`${username.value}:${password.value}`));
  });

  document.body.append(dialog);
  dialog.append(form);
  form.append(username, password, button);
  dialog.showModal();
  return new Promise((resolve) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      dialog.close(btoa(`${username.value}:${password.value}`));
      resolve(btoa(`${username.value}:${password.value}`));
    });
  });
}

async function fetchItems(items) {
  const authStr = await auth();
  // need to resolve cors
  // ref: https://www.redmine.org/boards/2/topics/52964
  const { issues } = await (await fetch(`https://<host>/issues.json?issue_id=${items.map(i => i.id).join(',')}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${authStr}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })).json();

  return issues.map(issue => ({
    title: `#${issue.id} ${issue.subject}`,
    orgSp: Math.floor(issue.subject.length / 7),
    link: `https://<host>/issues/${issue.id}`,
    sp: items.find(item => item.id == issue.id).sp,
  }));
}

function toQueryData(story) {
  return { id: story.title.match(/^#(\d+) /)[1], sp: story.sp };
}
