import Layout from '../components/Layout/Layout';
import { Container } from '../components/Container/Container';
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import InputForm from '../components/InputForm';

export interface Inputs {
	email: string;
	password: string;
}

const AuthPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>({ mode: 'all' });

	const onSubmit = (data: Inputs) => console.log(data);

	const [tabLogin, setTabLogin] = useState<'user' | 'guest'>('user');

	return (
		<Layout>
			<Container>
				<div className={` max-w-[683px] mx-auto`}>
					<div className={`flex justify-between text-[20px]/[1.3] mb-10`}>
						<div
							className={` basis-[320px] p-[10px] pt-0 border-r border-b ${
								tabLogin === 'user' ? 'border-[#27697F]' : 'border-[#D6E8EE]'
							} cursor-pointer `}
							onClick={() => setTabLogin('user')}
						>
							Log in as a client
						</div>
						<div
							className={` basis-[320px] p-[10px] pt-0 border-r border-b ${
								tabLogin === 'guest' ? 'border-[#27697F]' : 'border-[#D6E8EE]'
							} cursor-pointer`}
							onClick={() => setTabLogin('guest')}
						>
							Check in as a guest
						</div>
					</div>
					<div className={` p-10 border border-[#D6E8EE]`}>
						<form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col gap-5 mb-5`}>
							<InputForm
								register={register}
								type={['email']}
								name="email"
								options={{ required: true }}
								text="E-mail"
							/>
							<InputForm
								register={register}
								type={['password', 'text']}
								name="password"
								options={{ required: true, minLength: 6 }}
								text="Password"
							/>
							<button
								type="submit"
								className={` py-[10px] border border-[#1870A6] rounded-[4px] text-[18px]/[1.3] text-[#1870A6]`}
							>
								Login
							</button>
						</form>
						<div className={` text-center text-[18px]/[1.3] mb-5`}>or</div>
						<div className={`flex justify-between`}>
							<button
								className={`flex border border-[#D6E8EE] max-w-[280px] w-full gap-[10px] items-center justify-center py-[10px] rounded-[4px]`}
							>
								<img src="google.svg" alt="google icon" />
								<span>Google</span>
							</button>
							<button
								className={`flex border border-[#D6E8EE] max-w-[280px] w-full gap-[10px] items-center justify-center py-[10px] rounded-[4px]`}
							>
								<img src="apple.svg" alt="apple icon" />
								<span>Apple</span>
							</button>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default AuthPage;
