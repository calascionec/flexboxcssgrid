(function() {
    'use strict'

    new Vue({
        //this targets the div id app
        el: '#app',
        data: {
            boxes: {
                flexBox1: {
                    name: "Flexible Box 1",
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                    alignSelf: 'auto',
                    order: 0
                },
                flexBox2: {
                    name: "Flexible Box 2",
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                    alignSelf: 'auto',
                    order: 0
                },
                flexBox3: {
                    name: "Flexible Box 3",
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                    alignSelf: 'auto',
                    order: 0,
                },
                flexBox4: {
                    name: "Flexible Box 4",
                    grow: 0,
                    shrink: 1,
                    basis: 'auto',
                    alignSelf: 'auto',
                    order: 0
                }
            },
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            containerWidth: '100%',
            containerHeight: 'auto',
        },
        methods: {
            createNewFlexItem: function() {
                let numberOfFlexItems = Object.keys(this.boxes).length;
                let nextFlexItemNumber = numberOfFlexItems + 1;
                Vue.set(this.boxes,
                        ["flexBox" + (nextFlexItemNumber)],
                        {
                            name: "Flexible Box " + nextFlexItemNumber,
                            grow: 0,
                            shrink: 1,
                            basis: 'auto',
                            alignSelf: 'auto',
                            order: 0
                        }
                    );
            },
            removeLastFlexItem: function () {
                let numberOfFlexItems = Object.keys(this.boxes).length;
                if (numberOfFlexItems) {
                    Vue.delete(this.boxes, ["flexBox" + (numberOfFlexItems)]);
                } else {
                    alert("No Boxes to delete");
                }
            },
            resetFlexItems: function () {
                for (let box in this.boxes) {
                    this.boxes[box].grow = 0;
                    this.boxes[box].shrink = 1;
                    this.boxes[box].basis = 'auto';
                    this.boxes[box].alignSelf = 'auto';
                    this.boxes[box].order= 0;
                }
            },

            resetFlexContainer: function () {
                this.containerWidth = '100%';
                this.containerHeight = 'auto';
            },

            resetFlexContainerFlexProperties: function () {
                this.justifyContent = 'flex-start';
                this.alignItems = 'stretch';
                this.flexDirection = 'row';
                this.flexWrap = 'nowrap';
            },

            resetAll: function () {
                this.resetFlexItems();
                this.resetFlexContainer();
                this.resetFlexContainerFlexProperties();
            }
        }
    })

})()
