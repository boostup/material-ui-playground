export const menuOptionsTop = ["Inbox", "Starred", "Send email", "Drafts"];

const _menuOptionsBottom = ["All mail", "Trash", "Spam"];

const moreFakeOptions = new Array(71);

for (let i = 0; i < moreFakeOptions.length; i++) {
  moreFakeOptions[i] = "directory " + i;
}

export const menuOptionsBottom = _menuOptionsBottom.concat(moreFakeOptions);
