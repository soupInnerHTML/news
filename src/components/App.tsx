import React from 'react';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {News, NewsForm, Layout} from "@/components/custom";
import {navigation} from "@/constants/navigation";

export const App: React.FC = () => {
    return <Router>
        <Layout>
            <Routes>
                <Route path={navigation.MAIN} element={<News />} />
                <Route path={navigation.ADD} element={<NewsForm method={'add'} />} />
                <Route path={navigation.EDIT} element={<NewsForm method={'update'} />} />
            </Routes>
        </Layout>
    </Router>
}