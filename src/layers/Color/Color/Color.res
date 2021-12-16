open ColorReflection

module Color = {
  include ColorReflection

  let key = "color"
  @genType
  type i = { "color": ColorReflection.t }

  type value = string;

  let options = {
    "primary": "#0078D4",
    "secondary": "#2B88D8",
    "black": "#000000",
    "white": "#FFFFFF",
  };

  type options = {
    "primary": value,
    "secondary": value,
    "black": value,
    "white": value,
  };

  type output = { "color": value }
  type cssResolve = (value) => output
}
