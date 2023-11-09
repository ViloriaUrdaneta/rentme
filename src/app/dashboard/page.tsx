import React from 'react';
import Card from '@/components/Card';

export default function DashboardPage() {
    return (
        <div className='px-20'>
            <div className="grid grid-cols-6 gap-5">
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
