// import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedBurgers } from "./components/SelectedBurgers";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <SelectedBurgers />
    </CompleteOrderContainer>
  );
}
