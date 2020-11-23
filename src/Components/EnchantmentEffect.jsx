import Typography from "@material-ui/core/Typography";

export const EnchantmentEffect = (props) => {
  const { state, classes } = props;

  return (
    <>
      <Typography color="textSecondary" display="block" variant="caption">
        Effect
      </Typography>
      {state.enchantment.map((enchantment) => {
        return enchantment ? (
          <Typography>{`${
            enchantment.name
          }: Sneak is ${100}% stronger.`}</Typography>
        ) : null;
      })}
    </>
  );
};
