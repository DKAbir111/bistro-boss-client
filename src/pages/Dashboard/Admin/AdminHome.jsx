import { useQuery } from '@tanstack/react-query';
import { FaWallet, FaUsers, FaBook, FaTruck } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const colors = ['#0088FE', '#FF8042', '#00C49F', '#FFBB28'];

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        },
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        },
    });

    const pieChartData = chartData.map(data => ({ name: data.category, value: data.quantity }));

    return (
        <div className="p-4 sm:p-8 pt-16 min-h-screen">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-cinzel text-center sm:text-left">
                Hi, {user.displayName.split(' ')[0]} Welcome Back!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-purple-200 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <FaWallet className="text-purple-600 text-4xl mb-2" />
                    <h3 className="text-xl font-bold">${stats.revenue || 0}</h3>
                    <p className="text-gray-600">Revenue</p>
                </div>

                <div className="bg-yellow-200 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <FaUsers className="text-yellow-600 text-4xl mb-2" />
                    <h3 className="text-xl font-bold">{stats.users || 0}</h3>
                    <p className="text-gray-600">Customers</p>
                </div>

                <div className="bg-pink-200 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <FaBook className="text-pink-600 text-4xl mb-2" />
                    <h3 className="text-xl font-bold">{stats.menuItems || 0}</h3>
                    <p className="text-gray-600">Products</p>
                </div>

                <div className="bg-blue-200 p-4 rounded-lg shadow-md flex flex-col items-center">
                    <FaTruck className="text-blue-600 text-4xl mb-2" />
                    <h3 className="text-xl font-bold">{stats.orders || 0}</h3>
                    <p className="text-gray-600">Orders</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <BarChart
                        width={350}
                        height={300}
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8">
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div className="flex justify-center">
                    <PieChart width={350} height={350}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
