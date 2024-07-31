import { Typography } from "@material-tailwind/react";

interface Props {
  children: React.ReactNode;
}

const TextOnlySection = ({ children }: Props) => {
  return (
    <Typography variant="h6" color="white" className="text-left">
      {children}
    </Typography>
  );
};

export default TextOnlySection;