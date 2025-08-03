import ProductGrid from '../components/ProductGrid'
import { useTheme } from '../context/ThemeContext'


const Home = () => {
    const { theme } = useTheme()
    return (
        <div className="container mx-auto px-4 py-8">
            <h1
                className="text-3xl font-bold mb-8 text-center"
                style={{ color: 'var(--text-color)' }}
            >
                {theme === 'theme3' ? '🎉 Featured Products' : 'Home Products'}
            </h1>

            <ProductGrid />
        </div>
    )
}

export default Home