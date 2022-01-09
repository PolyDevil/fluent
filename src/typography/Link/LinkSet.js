// Generated by ReScript, PLEASE EDIT WITH CARE

import * as LinkProto from "./LinkProto.js";
import * as LinkDefaultProps from "./LinkDefaultProps.js";

function LinkSet$LinkSet(Props) {
  var href = Props.href;
  var classNameOpt = Props.className;
  var colorOpt = Props.color;
  var fontFamilyOpt = Props.fontFamily;
  var fontSizeOpt = Props.fontSize;
  var fontStyleOpt = Props.fontStyle;
  var fontWeightOpt = Props.fontWeight;
  var textDecorationColorOpt = Props.textDecorationColor;
  var textDecorationLineOpt = Props.textDecorationLine;
  var textDecorationStyleOpt = Props.textDecorationStyle;
  var textDecorationThicknessOpt = Props.textDecorationThickness;
  var textTransformOpt = Props.textTransform;
  var children = Props.children;
  var className = classNameOpt !== undefined ? classNameOpt : "";
  var color = colorOpt !== undefined ? colorOpt : LinkDefaultProps.LinkDefaultProps.make.color;
  var fontFamily = fontFamilyOpt !== undefined ? fontFamilyOpt : LinkDefaultProps.LinkDefaultProps.make.fontFamily;
  var fontSize = fontSizeOpt !== undefined ? fontSizeOpt : LinkDefaultProps.LinkDefaultProps.make.fontSize;
  var fontStyle = fontStyleOpt !== undefined ? fontStyleOpt : LinkDefaultProps.LinkDefaultProps.make.fontStyle;
  var fontWeight = fontWeightOpt !== undefined ? fontWeightOpt : LinkDefaultProps.LinkDefaultProps.make.fontWeight;
  var textDecorationColor = textDecorationColorOpt !== undefined ? textDecorationColorOpt : LinkDefaultProps.LinkDefaultProps.make.textDecorationColor;
  var textDecorationLine = textDecorationLineOpt !== undefined ? textDecorationLineOpt : LinkDefaultProps.LinkDefaultProps.make.textDecorationLine;
  var textDecorationStyle = textDecorationStyleOpt !== undefined ? textDecorationStyleOpt : LinkDefaultProps.LinkDefaultProps.make.textDecorationStyle;
  var textDecorationThickness = textDecorationThicknessOpt !== undefined ? textDecorationThicknessOpt : LinkDefaultProps.LinkDefaultProps.make.textDecorationThickness;
  var textTransform = textTransformOpt !== undefined ? textTransformOpt : LinkDefaultProps.LinkDefaultProps.make.textTransform;
  return LinkProto.LinkProto.make({
              href: href,
              className: className,
              color: color,
              fontFamily: fontFamily,
              fontSize: fontSize,
              fontStyle: fontStyle,
              fontWeight: fontWeight,
              textDecorationColor: textDecorationColor,
              textDecorationLine: textDecorationLine,
              textDecorationStyle: textDecorationStyle,
              textDecorationThickness: textDecorationThickness,
              textTransform: textTransform,
              children: children
            });
}

var LinkSet = {
  make: LinkSet$LinkSet
};

export {
  LinkSet ,
  
}
/* LinkProto Not a pure module */
