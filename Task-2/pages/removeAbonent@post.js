
module.exports = ['abonent/:abonent_id', async function (pool, { params }) {
	const { abonent_id } = params;
		await pool.query('DELETE FROM abonents WHERE id = ?', abonent_id);
		return res => res.redirect('/');

}];
