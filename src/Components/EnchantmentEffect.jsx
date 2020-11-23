import Typography from "@material-ui/core/Typography";

export const EnchantmentEffect = (props) => {
  const { state, classes } = props;

  return (
    <>
      <Typography color="textSecondary" display="block" variant="caption">
        Effect
      </Typography>
      <Typography>{`Sneak is ${100}% stronger.`}</Typography>
    </>
  );
};
