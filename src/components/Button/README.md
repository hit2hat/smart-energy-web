кнопка какая-то
```javascript
const Example = () => {
    return (
        <div 
            style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridColumnGap: 10
            }}
        >
            <Button>
                Обычная кнопка
            </Button>
            <Button type="outline">
                Кнопка с обводкой
            </Button>
            <Button type="disabled">
                Отключенная кнопка
            </Button>
        </div>
    );
};

Example();
```