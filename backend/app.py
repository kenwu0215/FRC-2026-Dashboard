# from fastapi import FastAPI, WebSocket
# import ntcore
# import threading
# import time


# app = FastAPI()
local_address = "127.0.0.1"
robot_address = "10.85.84.2"
# inst = ntcore.NetworkTableInstance.getDefault()
# inst.startClient4("Ken")
# inst.setServer(local_address)
# 
# inst.startServer()

# table = inst.getTable("Test")

# sub = table.getDoubleTopic("QQ").subscribe(0.0)
# latest_value=0.0
# clients = set()


# def nt_listener():
#     global latest_value
#     while True:
#         for u in sub.readQueue():
#             latest_value = u.value
#             for ws in list(clients):
#                 try:
#                     ws.send_json({"Value": latest_value})
#                 except:
#                     clients.remove(ws)
#         time.sleep(0.01)

# threading.Thread(target=nt_listener, daemon=True).start()

# @app.websocket("/ws")
# async def websocket_endpoint(ws: WebSocket):
#     await ws.accept()
#     clients.add(ws)
#     await ws.send_json({"Value": latest_value})
#     try:
#         while True:
#             await ws.receive_text()  # keep alive
#     except:
#         clients.remove(ws)

from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.websocket("/ws")
async def ws(ws: WebSocket):
    await ws.accept()
    data = await ws.send_text("hello")
    while True:
        print(data)
