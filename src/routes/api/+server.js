import mysql from 'mysql2/promise';

export const GET = async ({ request, url }) => {

    const query = url.searchParams.get('query') ;

    try {

        const connection = await mysql.createConnection({
            host: '141.144.194.239',
            port: '3306',
            user: 'alkin',
            password: 'alkiner3232',
            database: 'etumobile'
        });

        const data = await connection.query(query)

        return new Response(JSON.stringify({
            message: 'SQL Query executed successfully.',
            data: data
        }),{ status: 200});
    } catch (error) {
        return new Response(JSON.stringify({
            message: 'An error occurred while executing the SQL Query.',
            error: error
        }), { status: 500 });
    }
};