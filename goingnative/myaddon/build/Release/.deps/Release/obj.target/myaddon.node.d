cmd_Release/obj.target/myaddon.node := flock ./Release/linker.lock g++ -shared -pthread -rdynamic -m64  -Wl,-soname=myaddon.node -o Release/obj.target/myaddon.node -Wl,--start-group Release/obj.target/myaddon/myaddon.o -Wl,--end-group 
