import React from "react";

const QuestButton = ({
  onClick = () => null,
  text,
  iconAlign = "",
  size = "",
  variant = "",
  icon,
  disabled = false,
}) => {
  const customIconAlignClass = (iconAlign) => {
    switch (iconAlign.toLowerCase()) {
      case "left":
        return "flex-row-reverse";
      case "right":
        return "flex-row";
      default:
        return "";
    }
  };

  const customSizeClass = (size) => {
    switch (size.toLowerCase()) {
      case "large":
        return "py-4 text-md  min-w-[120px] ";
      case "small":
        return "py-3 text-sm  min-w-[80px]";
      default:
        return "";
    }
  };

  const customVariantClass = (variant) => {
    switch (variant.toLowerCase()) {
      case "outline":
        return " text-primary-yellow-700 bg-white border-2 border-primary-yellow-700    ";
      case "outline-primary":
        return " text-primary-blue-500 bg-white border-2 border-primary-blue-500    ";
      case "outline-dark":
        return " text-primary-grey-700 bg-white border-2 border-primary-grey-500 border-opacity-50   ";

      default:
        return " text-white bg-gradient-to-t from-primary-purple-800 to-primary-purple-500";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex  justify-center items-center gap-3  font-bold  rounded-2xl hover:shadow-lg focus:shadow-lg active:shadow-lg  px-6 ${
        icon && iconAlign && iconAlign.toLowerCase() === "left"
          ? "pl-4"
          : iconAlign.toLowerCase() === "right"
          ? "pr-4"
          : ""
      } ${customIconAlignClass(iconAlign)} ${customSizeClass(
        size
      )}  ${customVariantClass(variant)}  `}
    >
      <p className=" hover:underline font-satoshi  focus:underline  active:underline  underline-offset-4 font-bold text-sm  ">
        {text}
      </p>
      {icon && icon}
    </button>
  );
};

export default QuestButton;
