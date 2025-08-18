import React from 'react';

const Payment = () => {
	const subtitleStyle = 'text-lg text-[#0D0C0C] font-medium leading-6 !mb-0.5';
	const textStile = 'text-lg text-[#0D0C0C] font-thin leading-6 text-justify ';

	return (
		<div className="flex gap-15 max-768px:flex-col">
			<div>
				<h3 className={subtitleStyle}>Return Policy:</h3>

				<ul className="!list-disc !pl-6 flex flex-col gap-1">
					<li className={textStile}>30-day hassle-free returns.</li>
					<li className={textStile}>Item must be unworn and in original packaging.</li>
					<li className={textStile}>
						Refunds processed within 7 business days of receiving the returned item.
					</li>
				</ul>
			</div>

			<ul className="flex flex-col gap-4 justify-between">
				<li>
					<h4 className={subtitleStyle}>Cash payment</h4>
					<p className={textStile}>
						You can pay for your order with cash. Payment is made upon receipt of the goods.There is
						no commission for cash on delivery.
					</p>
				</li>

				<li>
					<h4 className={subtitleStyle}>By Visa/Mastercard Card (3% discount)</h4>
					<p className={textStile}>
						You can pay for your order with a payment card. Payment is made on the website through
						the Plata by MONO system or upon receipt of the order in the store or at the courier
						service office.
					</p>
				</li>

				<li>
					<h4 className={subtitleStyle}>Payment in parts (Monobank / Privatbank)</h4>
					<p className={textStile}>You can pay for your order with installments for 4 months.</p>
				</li>
			</ul>
		</div>
	);
};

export default Payment;
