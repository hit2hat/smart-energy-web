а эт че за розетка?
```javascript
const Example = () => {
    return (
        <Plug
            isOn
            index={3}
            name="Розетка возле комьютера"
            voltage={220}
            amperage={2.5}
            power={68}
        />
    );
};

Example();
```