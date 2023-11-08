import React from 'react';
import Card from '@/components/Card';

export default function DashboardPage() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
