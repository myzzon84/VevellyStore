import Layout from '../components/Layout/Layout';
import { Container } from '../components/Container/Container';
import { FieldValues, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import InputForm from '../components/InputForm';
import { authPage as t } from '../translations/translations';
import { translateStore } from '../store/translateStore';
import Breadcrumbs from '../components/Breadcrumbs';

const AuthPage = () => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({ mode: 'all' });

	const onSubmit = (data: FieldValues) => console.log(data);

	const [tabLogin, setTabLogin] = useState<'user' | 'guest'>('user');

	const lang = translateStore(state => state.lang);

	return (
		<Layout>
			<Container>
				<Breadcrumbs className={` mb-11`}/>
			</Container>
			<Container>
				<div className={` max-w-[683px] mx-auto`}>
					<div
						className={`flex justify-between text-[20px]/[1.3] mb-10 max-700px:gap-3 max-600px:text-[16px]`}
					>
						<div
							className={` basis-[320px] p-[10px] pt-0 border-r border-b ${
								tabLogin === 'user' ? 'border-[#27697F]' : 'border-[#D6E8EE]'
							} cursor-pointer `}
							onClick={() => setTabLogin('user')}
						>
							{t.clientTab[lang]}
						</div>
						<div
							className={` basis-[320px] p-[10px] pt-0 border-r border-b ${
								tabLogin === 'guest' ? 'border-[#27697F]' : 'border-[#D6E8EE]'
							} cursor-pointer`}
							onClick={() => setTabLogin('guest')}
						>
							{t.guestTab[lang]}
						</div>
					</div>
					<div className={` p-10 border border-[#D6E8EE] max-500px:p-5`}>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className={`flex flex-col gap-5 mb-5 max-500px:mb-2`}
						>
							<InputForm
								register={register}
								type={['email']}
								name="email"
								options={{
									required: { value: true, message: 'field are required' },
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: 'invalid email',
									},
								}}
								text="E-mail"
								watch={watch}
								errors={errors}
							/>
							<InputForm
								register={register}
								type={['password', 'text']}
								name="password"
								options={{
									required: { value: true, message: 'field are required' },
									minLength: { value: 6, message: 'password must be at least 6 characters' },
								}}
								text={t.password[lang]}
								watch={watch}
								errors={errors}
							/>
							<button
								type="submit"
								className={` py-[10px] border border-[#1870A6] rounded-[4px] text-[18px]/[1.3] text-[#1870A6]`}
							>
								{t.login[lang]}
							</button>
						</form>
						<div className={` text-center text-[18px]/[1.3] mb-5 max-500px:mb-2`}>{t.or[lang]}</div>
						<div className={`flex justify-between max-700px:gap-3`}>
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
