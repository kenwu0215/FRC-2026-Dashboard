from fastapi import FastAPI
import ntcore


app = FastAPI()

@app.get("/")
async def test_func():
    inst = ntcore.NetworkTableInstance.getDefault()
    inst.startClient4("Ken")
    inst.startServer()

    table = inst.getTable("Test")

    sub = table.getDoubleTopic("QQ").subscribe(0.0)
    try:
        value = sub.get()
        return {
            "Hello":"World",
            "Value":value
        }

    except:
        return {"QQ":"you die"}