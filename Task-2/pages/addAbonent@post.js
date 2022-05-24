module.exports = ['/add-abonent', async function (pool, { body }) {
	const { name, lastname, dadname, clas, date } = body;
	await pool.query('INSERT INTO abonents SET ?', {
		name, lastname, dadname, clas, date,
	});

	return res => res.redirect('/');
}]; 