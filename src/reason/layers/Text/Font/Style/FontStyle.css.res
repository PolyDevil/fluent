type value = string;

type options = {
  "normal": value,
  "italic": value,
  "oblique": value,
  "inherit": value,
  "initial": value,
  "unset": value,
};

type output = {
  "fontStyle": value,
}

type cssResolve = (value) => output

type variant = {
  "normal": string,
  "italic": string,
  "oblique": string,
  "inherit": string,
  "initial": string,
  "unset": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module FontStyle = {
  type t = [
    | #normal
    | #italic
    | #oblique
    | #inherit
    | #initial
    | #unset
  ]

  @genType
  type i = { "fontStyle": t }

  @genType
  let initial = #normal;

  let style = styleVariants({
    "normal": "normal",
    "italic": "italic",
    "oblique": "oblique",
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }, (value) => {
    { "fontStyle": value };
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #normal => style["normal"]
    | #italic => style["italic"]
    | #oblique => style["oblique"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #unset => style["unset"]
    };
  }
}