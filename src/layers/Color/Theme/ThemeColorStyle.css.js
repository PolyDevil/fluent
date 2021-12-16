// Generated by ReScript, PLEASE EDIT WITH CARE

import * as ThemeColor from "./ThemeColor.js";
import * as Css from "@vanilla-extract/css";

var options = ThemeColor.ThemeColor.options;

var style = Css.styleVariants(options, (function (value) {
        return {
                "--h": value.hue,
                "--s": value.saturation,
                "--l": value.lightness,
                "--a": value.alpha,
                "--color": "hsl(var(--h) var(--s) var(--l) / var(--a))",
                "--text-color": value.textColor
              };
      }));

var ThemeColorStyle_key = ThemeColor.ThemeColor.key;

var ThemeColorStyle_initial = ThemeColor.ThemeColor.initial;

var ThemeColorStyle = {
  key: ThemeColorStyle_key,
  initial: ThemeColorStyle_initial,
  options: options,
  style: style
};

export {
  ThemeColorStyle ,
  
}
/* style Not a pure module */
