import { useForm } from "react-hook-form";
export default function RegisterUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Registrar usuario</h2>
      <label htmlFor="">nome</label>
      <input type="text" {...register("nome")}/>
      
      <label htmlFor="">CPF</label>
      <input type="text" {...register("cpf")}/>

      <input type="submit" />
    </form>

    <div>
      <h2>Deletar usuario</h2>
          <label htmlFor="">Digite o Id para deletar</label>
      <input />
    </div>

     <div>
      <h2>Buscar usuario</h2>
          <label htmlFor="">Digite o Id para verificar usuario</label>
      <input />
    </div>
    </div>;
}
