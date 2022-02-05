# -*- coding: utf-8 -*-
"""
Created on Fri Jul  6 10:19:03 2018

@author: Daisei YOSHINO
"""

from pynput.keyboard import Key, Listener
import sys
import json

out = []

class KeyLog:
    def __init__(self):
        print("called")
        self.keylog = {}
        
    def getkeypress(self, keyname):
        kn = str(keyname)
        
        if kn in self.keylog:
            self.keylog[kn]+=1
        else:
            tempdict = {kn : 1}
            self.keylog.update(tempdict)
    
    def outputLog(self):
        print(json.dumps(self.keylog, sort_keys=True, indent=4))

def on_press_mother(key, klog):
    klog.getkeypress(key)

def on_press(key):
    print('+n:{0}'.format(key))
    out.append(format(key))

def on_release(key):
    if key == Key.esc:
        sys.exit()

if __name__ == '__main__':
    KL=KeyLog()
    def on_press_KL(key):
        on_press_mother(key,KL)
    
    with Listener(on_press=on_press_KL, on_release=on_release) as listener:
        listener.join()
    
    KL.outputLog()