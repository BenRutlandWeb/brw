import home from "@material-symbols/svg-400/rounded/home.svg?raw";
import notes from "@material-symbols/svg-400/rounded/notes.svg?raw";
import arrow_upward from "@material-symbols/svg-400/rounded/arrow_upward.svg?raw";
import code from "@material-symbols/svg-400/rounded/code.svg?raw";
import tag from "@material-symbols/svg-400/rounded/tag.svg?raw";
import data_object from "@material-symbols/svg-400/rounded/data_object.svg?raw";
import data_array from "@material-symbols/svg-400/rounded/data_array.svg?raw";
import content_copy from "@material-symbols/svg-400/rounded/content_copy.svg?raw";
import check from "@material-symbols/svg-400/rounded/check.svg?raw";
import radiate from "@/assets/icons/radiate.svg?raw";
import codepen from "@/assets/icons/codepen.svg?raw";
import github from "@/assets/icons/github.svg?raw";
import linkedin from "@/assets/icons/linkedin.svg?raw";
import brw from "@/assets/icons/brw.svg?raw";

/** Import an SVG here to include it in the bundle. Unused files are left out. */
export const icons = {
  home,
  notes,
  arrow_upward,
  code,
  tag,
  data_object,
  data_array,
  content_copy,
  check,
  radiate,
  codepen,
  github,
  linkedin,
  brw,
} as const;

export type IconName = keyof typeof icons;

export function getIcon(name: IconName) {
  const svg = icons[name];
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 24 24";
  const inner = svg
    .replace(/^[\s\S]*?<svg[^>]*>/i, "")
    .replace(/<\/svg>\s*$/i, "");

  return { viewBox, inner };
}
