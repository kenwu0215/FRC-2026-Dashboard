import time
import ntcore

# 設定
server_address = "127.0.0.1" # 如果是實機，建議用 inst.setServerTeam(8584)
tableName = "Test"

# 1. 初始化 NetworkTables
inst = ntcore.NetworkTableInstance.getDefault()

# 2. 啟動 Client 並設定伺服器
# "MyPythonClient" 是識別名稱，你可以隨便取
inst.startClient4("Hello")
inst.setServer(server_address) # 連接到本地

# 3. 獲取表格
table = inst.getTable(tableName)

# 4. 建立訂閱者 (Subscriber)
# 這是獲取 "Hello" 這個 key 的 Double 數值，預設值為 0.0
hello_sub = table.getDoubleTopic("QQ").subscribe(0.0)

print(f"Connecting to {server_address} ...")

try:
    while True:
        # 檢查連線狀態 (選配，方便除錯)
        if not inst.isConnected():
            print("Wait... Not connected yet.", end="\r")
        else:
            # 5. 讀取數值
            value = hello_sub.get()
            print(f'Value XD: {value}             ', end="\r") # 使用 \r 讓畫面更乾淨

        time.sleep(1)
except KeyboardInterrupt:
    print("\n後端已停止")