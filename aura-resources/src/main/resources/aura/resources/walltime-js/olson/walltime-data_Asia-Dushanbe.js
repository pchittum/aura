/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"RussiaAsia":[{"name":"RussiaAsia","_from":"1981","_to":"1984","type":"-","in":"Apr","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"RussiaAsia","_from":"1981","_to":"1983","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"RussiaAsia","_from":"1984","_to":"1991","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"RussiaAsia","_from":"1985","_to":"1991","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"RussiaAsia","_from":"1992","_to":"only","type":"-","in":"Mar","on":"lastSat","at":"23:00","_save":"1:00","letter":"S"},{"name":"RussiaAsia","_from":"1992","_to":"only","type":"-","in":"Sep","on":"lastSat","at":"23:00","_save":"0","letter":"-"},{"name":"RussiaAsia","_from":"1993","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"RussiaAsia","_from":"1993","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"RussiaAsia","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"2:00s","_save":"0","letter":"-"}]},
        zones: {"Asia/Dushanbe":[{"name":"Asia/Dushanbe","_offset":"4:35:12","_rule":"-","format":"LMT","_until":"1924 May 2"},{"name":"Asia/Dushanbe","_offset":"5:00","_rule":"-","format":"DUST","_until":"1930 Jun 21"},{"name":"Asia/Dushanbe","_offset":"6:00","_rule":"RussiaAsia","format":"DUS%sT","_until":"1991 Mar 31 2:00s"},{"name":"Asia/Dushanbe","_offset":"5:00","_rule":"1:00","format":"DUSST","_until":"1991 Sep 9 2:00s"},{"name":"Asia/Dushanbe","_offset":"5:00","_rule":"-","format":"TJT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);