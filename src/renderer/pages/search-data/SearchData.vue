<template>
    <div id="search-data-container">
        <div>
            <div class="section-container">
                <p>Enter your search term below</p>
                <div class="search-line">
                    <status-indicator :status="status"/>
                    <input
                        class="xiv-input"
                        placeholder="..."
                        ref="searchInput"
                        v-model="searchTerm"
                        @keypress="searchOnEnter"
                    />
                    <button @click="onSearch">Search</button>
                </div>
                {{info}}
            </div>
            <div class="section-container">
                <ul>
                    <li>This search is case insensitive and returns partial results</li>
                    <li>It ignores any character other than letters and numbers</li>
                    <li>Requires at least 3 characters to run</li>
                    <li>Click on the result row to jump to that section</li>
                </ul>
            </div>
        </div>
        <div class="output">
            <table class="xiv-table" v-if="status === 'success'">
                <tr>
                    <th>Match/es</th>
                    <th>Group</th>
                </tr>
                <tr v-for="match in matches" @click="onJumpToGroup(match)">
                    <td>{{match.matchesString}}</td>
                    <td>{{match.path}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { searchData } from './index';

export default {
    name: 'search-data',
    data: () => ({
        searchTerm: '',
        status: '',
        info: '',
        matches: []
    }),
    mounted: function() {
        // Auto-focus search input when search content is initialized
        //NOTE: Does NOT auto-focus in development if search is already open
        this.$refs.searchInput.focus();
    },
    methods: {
        searchOnEnter: function($event) {
            if($event.code === 'Enter') this.onSearch();
        },
        onSearch: function() {
            const testTerm = this.searchTerm.toLowerCase().replace(/[^a-z0-9 ]/g, '');
            if(testTerm.length < 3) {
                this.status = 'failure';
                this.info = 'Please enter at least 3 characters';
                return;
            }

            this.status = 'active';
            this.info = 'Searching...';
            this.$forceUpdate();

            // Timeout allows UI to update
            setTimeout(() => {
                this.matches = searchData(this.searchTerm);

                if(this.matches.length > 0) {
                    this.status = 'success';
                    this.info = `${this.matches.length} tasks found`;
                }
                else {
                    this.status = 'failure';
                    this.info = 'No tasks found';
                }
            }, 250);
        },
        onJumpToGroup: function(match) {
            this.$store.commit('navigation/SET_BREADCRUMBS', match.path.split(' > '));
        }
    }
};
</script>

<style lang="scss">
#search-data-container {
    margin-right: 20px;
    height: 100%;
    width: 100%;

    .section-container {
        display: inline-block;
        //vertical-align: top;
    }

    .search-line {
        margin: 10px 0;
    }

    .output {
        margin-top: 20px;
    }
}
</style>
