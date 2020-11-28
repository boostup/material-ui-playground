import MoveToInbox from "@material-ui/icons/MoveToInbox";
import Star from "@material-ui/icons/Star";
import PresentToAll from "@material-ui/icons/PresentToAll";
import Drafts from "@material-ui/icons/Drafts";
import AllInbox from "@material-ui/icons/AllInbox";
import Delete from "@material-ui/icons/Delete";
import Label from "@material-ui/icons/Label";

export function getIconComponent(iconName) {
  switch (iconName) {
    case "MoveToInbox":
      return <MoveToInbox />;
    case "Star":
      return <Star />;
    case "PresentToAll":
      return <PresentToAll />;
    case "Drafts":
      return <Drafts />;
    case "AllInbox":
      return <AllInbox />;
    case "Delete":
      return <Delete />;
    case "Label":
      return <Label />;
    default:
      break;
  }
}

export const menuOptionsTop = [
  { label: "Inbox", icon: "MoveToInbox" },
  { label: "Starred", icon: "Star" },
  { label: "Sent", icon: "PresentToAll" },
  { label: "Draft", icon: "Drafts" },
];

const _menuOptionsBottom = [
  { label: "All mail", icon: "AllInbox" },
  { label: "Trash", icon: "Delete" },
  { label: "Spam", icon: "Label" },
];

const moreFakeOptions = new Array(71);

for (let i = 0; i < moreFakeOptions.length; i++) {
  moreFakeOptions[i] = { label: "Inbox " + i, icon: "Label" };
}

export const menuOptionsBottom = _menuOptionsBottom.concat(moreFakeOptions);
