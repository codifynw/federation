window.test = 'this is a test string'

<<<<<<< Updated upstream
export default function App({ shouldFetch }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://xkcd-imgs.herokuapp.com/"
                );
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [shouldFetch]);

    console.log('inside comic app')

    return <ImageLoader src={loading ? imgData : data.url} alt={data.title} />;
=======
export default function App() {
    return 'this is a string'
>>>>>>> Stashed changes
}
