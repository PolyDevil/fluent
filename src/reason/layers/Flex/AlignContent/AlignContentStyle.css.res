open AlignContent

@module("@vanilla-extract/css") external styleVariants: (AlignContent.options, AlignContent.cssResolve) => AlignContent.variant = "styleVariants"

module AlignContentStyle = {
  include AlignContent;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #center => style["center"]
    | #start => style["start"]
    | #end => style["end"]
    | #flexStart => style["flexStart"]
    | #flexEnd => style["flexEnd"]
    | #normal => style["normal"]
    | #baseline => style["baseline"]
    | #firstBaseline => style["firstBaseline"]
    | #lastBaseline => style["lastBaseline"]
    | #spaceBetween => style["spaceBetween"]
    | #spaceAround => style["spaceAround"]
    | #spaceEvenly => style["spaceEvenly"]
    | #stretch => style["stretch"]
    | #safeCenter => style["safeCenter"]
    | #unsafeCenter => style["unsafeCenter"]
    | #unset => style["unset"]
    };
  }
}