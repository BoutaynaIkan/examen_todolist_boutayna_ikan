function TestComponent() {
    const handleCrash = () => {
    // Cette fonction va planter car 'undefined' n'a pas de propriété 'name'
    const user = undefined;
    console.log(user.name);
    };

    return <button onClick={handleCrash}>Crash Test</button>;
}

export default TestComponent;