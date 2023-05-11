import "./styles.css";

function Buttons() {
  return (
<div class="radio-buttons">
  <label class="radio-button">
    <input value="option1" name="option" type="radio"/>
    <div class="radio-circle"></div>
    <span class="radio-label">Usuário</span>
  </label>
  <label class="radio-button">
    <input value="option2" name="option" type="radio"/>
    <div class="radio-circle"></div>
    <span class="radio-label">Administrador</span>
  </label>
  <label class="radio-button">
    <input value="option3" name="option" type="radio"/>
    <div class="radio-circle"></div>
    <span class="radio-label">Empresa</span>
  </label>
</div>

  );
}

export default Buttons;
