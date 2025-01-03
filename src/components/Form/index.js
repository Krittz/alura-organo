import './Form.css';
import Input from '../Input';
const Form = () => {

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Input
                    label="Nome"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Digite seu nome"
                />


                <Input
                    label="Cargo"
                    id="position"
                    name="position"
                    type="text"
                    placeholder="Digite seu cargo"
                />

                <Input
                    label="Imagem"
                    id="image"
                    name="image"
                    type="text"
                    placeholder="Informe o endereço da imagem" />


            </form>
        </section>
    );

}

export default Form

