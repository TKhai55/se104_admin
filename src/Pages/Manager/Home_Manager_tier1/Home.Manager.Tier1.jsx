import React from 'react'
import './Home.Manager.Tier1.css'
import Header from '../Header_Manager/Header'
import { Link } from 'react-router-dom'

const league = [
    {
        id: 0,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/c/c9/V.League_1_2022.svg',
        name: 'V_League 2022'
    },
    {
        id: 1,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/5/59/V.League_1_%282021%29.png',
        name: 'V_League 2021'
    },
    {
        id: 2,
        logo: 'https://upload.wikimedia.org/wikipedia/vi/5/5f/V.League_1_%282020%29.svg',
        name: 'V_League 2020'
    },
    {
        id: 3,
        logo: 'https://vpf.vn/wp-content/uploads/2019/02/Logo-1.png',
        name: 'V_League 2019'
    },
]

const Home = () => {
    return (
        <div className='Home_tier1'>
            <Header />
            <section className='home_container'>
                <div className='league_table'>
                    <table className='league'>
                        <thead>
                            <tr><th>CHỌN MÙA GIẢI</th></tr>

                        </thead>
                        <tbody>

                            {
                                league.map(league => {
                                    return (
                                        // <Link to='/club/detailclub'>
                                        <Link to='/manager/home'>
                                            <tr className='league_infor' key={league.id}>
                                                <td className='logo'><img src={league.logo} alt={league.name} className='league_logo' /></td>
                                                <td className='league_name'>{league.name}</td>
                                            </tr>
                                        </Link>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </section>
        </div>
    )
}

export default Home