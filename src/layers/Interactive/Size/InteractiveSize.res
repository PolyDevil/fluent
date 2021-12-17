module InteractiveSize = {
  let key = "interactiveSize"

  @genType
  type t = [
    | #xsmall
    | #small
    | #medium
    | #large
    | #xlarge
  ]

  let initial = #medium;

  type value = {
    "paddingBlock": string,
    "paddingInline": string,
    "fontSize": string,
    "borderRadius": string,
    "borderWidth": string,
    "outlineOffset": string,
  };

  type options = {
    "xsmall": value,
    "small": value,
    "medium": value,
    "large": value,
    "xlarge": value,
  };

  let options = {
    "xsmall": {
      "paddingBlock": "7px",
      "paddingInline": "12px",
      "fontSize": "10px",
      "borderRadius": "4px",
      "borderWidth": "1px",
      "outlineOffset": "-4px",
    },

    "small": {
      "paddingBlock": "10px",
      "paddingInline": "16px",
      "fontSize": "12px",
      "borderRadius": "6px",
      "borderWidth": "1px",
      "outlineOffset": "-4px",
    },

    "medium": {
      "paddingBlock": "12px",
      "paddingInline": "20px",
      "fontSize": "14px",
      "borderRadius": "8px",
      "borderWidth": "2px",
      "outlineOffset": "-8px",
    },

    "large": {
      "paddingBlock": "18px",
      "paddingInline": "24px",
      "fontSize": "15px",
      "borderRadius": "12px",
      "borderWidth": "2px",
      "outlineOffset": "-8px",
    },

    "xlarge": {
      "paddingBlock": "26px",
      "paddingInline": "32px",
      "fontSize": "16px",
      "borderRadius": "16px",
      "borderWidth": "2px",
      "outlineOffset": "-8px",
    },
  }

  type variant = {
    "xsmall": string,
    "small": string,
    "medium": string,
    "large": string,
    "xlarge": string,
  };

  type output = {
    "paddingBlock": string,
    "paddingInline": string,
    "fontSize": string,
    "borderRadius": string,
    "borderWidth": string,
    "outlineWidth": string,
    "outlineOffset": string,
  }

  type cssResolve = (value) => output
}