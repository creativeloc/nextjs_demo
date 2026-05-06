import Hello from "../../components/Hello";

const Home = () => {
  console.log('what type of a component am I?')
  console.log('what type of a component am I?')

  return (
      <main>
        <div className="text-5xl underline">Welcome to Next.js!</div>
        <Hello />
      </main>
  )
}
export default Home

