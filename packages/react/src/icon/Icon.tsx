export const Icon = ({
  icon,
  size,
  color,
  weight,
  grade,
  isFilled = false,
}: {
  /**The icon from Material symbols you want to display*/
  icon: string;

  /**The font size of the icon */
  size?: 20 | 24 | 40 | 48;

  /**The color of the icon*/
  color?: string;

  /**The weight of the icon*/
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

  /**The of grade the icon*/
  grade?: -25 | 0 | 200;

  /**Decides whether the icon is filled or not*/
  isFilled?: boolean;
}) => {
  return (
    <span
      className="material-symbols-rounded"
      style={{
        fontSize: size,
        color: color,
        fontVariationSettings: `'FILL' ${isFilled ? 1 : 0}, 'wght' ${weight ? weight : 600}, 'GRAD' ${
          grade ? grade : 0
        }`,
      }}
    >
      {icon}
    </span>
  );
};
