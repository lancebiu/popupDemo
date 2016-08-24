# popupDemo
一个简单的弹框组件

## Usage

```
    var popup = new Popup()
        .alert({
            content: "test",
            skinClassName: "test"
        })
        .on("close", function () {
            console.log('popup closed');
        });
```
