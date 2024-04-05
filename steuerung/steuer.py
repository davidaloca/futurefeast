from websockets.sync.client import connect
import time
 
 
 
def main():
    with connect(f"ws://192.168.1.100:8080") as websocket:
        websocket.send("something")
        print(websocket.recv())
        print("Done")
 
 
if __name__ == "__main__":
    main()