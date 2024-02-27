import Text from "../../Text";
import { format } from "../../utils/date-utils";
import { Container } from "./style";

interface IDateRangeHeader {
  dates: Date[] | null[];
  separator: string;
  formate: string;
}

export const DateRangeHeader = ({
  dates,
  separator,
  formate,
}: IDateRangeHeader) => {
  const [startDate, endDate] = dates;

  const startDateStr = format(startDate, formate) || formate;
  const endDateStr = format(endDate, formate) || formate;

  return (
    <Container>
      <Text>{`${startDateStr} ${separator} ${endDateStr}`}</Text>
    </Container>
  );
};
