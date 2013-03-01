/*
 * Copyright (C) 2012 salesforce.com, inc.
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
({
    afterRender: function(component, helper) {
        helper.setGridInitialValue(component);
        helper.updateMonthYear(component, component.get("v.value"));
        helper.updateGlobalEventListeners(component);
        var ret = this.superAfterRender();
        helper.localizeToday(component);
        return ret;
    },

    rerender: function(component, helper) {
        helper.setGridInitialValue(component);
        helper.updateMonthYear(component, component.get("v.value"));
        helper.updateGlobalEventListeners(component);
        this.superRerender();
        helper.localizeToday(component);
    },
    
    unrender: function(component, helper) {
        if (helper.getOnClickEventProp.cache.onClickStartEvent && helper.getOnClickEventProp.cache.onClickStartFunction) {
            document.body.removeEventListener(helper.cache.onClickStartEvent, helper.cache.onClickStartFunction);
        }
        if (helper.getOnClickEventProp.cache.onClickEndEvent && helper.getOnClickEventProp.cache.onClickEndFunction) {
            document.body.removeEventListener(helper.cache.onClickEndEvent, helper.cache.onClickEndFunction);
        }
        this.superUnrender();
    }
})