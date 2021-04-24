<template>
    <div id="search-data-container">
        <div>
            <div class="section-container">
                <p>Enter your search term below</p>
                <div class="search-line">
                    <span class="status-indicator" :class="status"/>
                    <input v-model="searchTerm" @keypress="searchOnEnter"/>
                    <button @click="onSearch">Search</button>
                </div>
                {{ info }}
            </div>
            <div class="section-container">
                <ul style="display: inline-block;">
                    <li>This search is case insensitive and returns partial results</li>
                    <li>It ignores any character other than letters and numbers</li>
                    <li>Requires at least 3 characters to run</li>
                    <li>Click on the result row to jump to that section</li>
                </ul>
            </div>
        </div>
        <div class="output">
            <table class="match-table" v-if="status === 'success'">
                <tr>
                    <th>Match/es</th>
                    <th>Group</th>
                </tr>
                <tr v-for="match in matches" @click="onJumpToGroup(match)">
                    <td>{{ match.matchesString }}</td>
                    <td>{{ match.pathString }}</td>
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
    methods: {
        searchOnEnter: function($event) {
            if ($event.code === 'Enter') this.onSearch();
        },
        onSearch: function() {
            const testTerm = this.searchTerm.toLowerCase().replace(/[^a-z0-9 ]/g, '');
            if (testTerm.length < 3) {
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

                if (this.matches.length > 0) {
                    this.status = 'success';
                    this.info = `${this.matches.length} tasks found`;
                } else {
                    this.status = 'failure';
                    this.info = 'No tasks found';
                }
            }, 250);
        },
        onJumpToGroup: function(match) {
            this.$store.commit('navigation/SET_BREADCRUMBS', match.path);
        }
    }
};
</script>

<style>
/*---------------------- Search Area ----------------------*/
#search-data-container {
    height: 100%;
    width: 100%;
}

.section-container {
    display: inline-block;
    vertical-align: top;
}

.search-line {
    margin: 10px 0;
}

.output {
    margin-top: 20px;
}

/*---------------------- Row ----------------------*/
.match-table {
    border-collapse: collapse;
    width: 100%;
}

.match-table tr {
    background-color: #3282B8;
    border-bottom: 1px solid black;
    user-select: none;
}

.match-table tr:nth-child(even) {
    background-color: #0F4C75;
}

.match-table tr:hover {
    cursor: pointer;
}

.match-table td {
    padding: 5px 10px;
    white-space: pre-wrap;
    width: 50%;
}

/*---------------------- Dot Indicator ----------------------*/
.status-indicator {
    display: inline-block;
    height: 15px;
    width: 15px;
    background-color: #CCC;
    border-radius: 50%;
    margin-bottom: -3px;
}

.status-indicator.active {
    transform: scale(1);
    animation: pulse 2s infinite;
}

.status-indicator.success {
    background-color: green;
}

.status-indicator.failure {
    background-color: red;
}

/* Dot Indicator Animation */
@keyframes pulse {
    0% {
        transform: scale(0.75);
        filter: brightness(75%);
    }

    50% {
        transform: scale(1);
        filter: brightness(100%);
    }

    100% {
        transform: scale(0.75);
        filter: brightness(75%);
    }
}
</style>
