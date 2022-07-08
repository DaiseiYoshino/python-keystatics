# -*- coding: utf-8 -*-
"""
Created on Thu Jan 31 20:09:28 2019

@author: Daisei YOSHINO
"""

from pynput.keyboard import Listener
import os
import json
import datetime
import atexit

log_root = './LOG/'

class Keys_stack:
    def __init__(self):
        self.time = datetime.datetime.now()
        self.today = self.time.strftime('%Y_%m_%d')
        if os.path.exists(log_root+self.today+'.txt'):
            self.ks = json.load(open(log_root+self.today+'.txt'))
        else:
            self.ks = {}

    def key_append(self,key):
        temp_day = datetime.datetime.now()
        if self.time.minute != temp_day.minute:
            self.save_log()
        if self.time.day != temp_day.day:
            self.change_day()
        self.time = temp_day
        
        skey = str(key)
        
        if skey in self.ks:
            self.ks[skey]+=1
        else:
            self.ks.update({skey:1})
    
    def save_log(self):
        f = open(log_root+self.today+'.txt','w')
        f.write(json.dumps(self.ks))
        print('at '+datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')+' ... saved.')
    
    def change_day(self):
        self.ks = {}
        self.time = datetime.datetime.now()
        self.today = self.time.strftime('%Y_%m_%d')

if __name__ == '__main__':
    print('Get key ready.')
    KS = Keys_stack()
    atexit.register(KS.save_log)
    with Listener(on_press=KS.key_append) as listener:
        listener.join()
