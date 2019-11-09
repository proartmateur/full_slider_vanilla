import os, json

img_arr = []
img_path = "./assets/img/"
for root, dirs, files in os.walk(img_path, topdown=False):
   for name in files:
      #print(os.path.join(root, name))
      img_arr.append(os.path.join(root, name))
   
print(img_arr)
with open("imgs.js",'w') as fi:
    fi.write(json.dumps(img_arr))