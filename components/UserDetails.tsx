"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { BankSignupDwollaUser } from "@/lib/types/user";

export default function UserInfo({
  firstName,
  lastName,
  address1,
  city,
  stateProvince,
  zipPostalCode,
  dateOfBirth,
  ssnSin,
}: Partial<BankSignupDwollaUser> ) {
  

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">User Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem label="First Name" value={firstName!} />
          <InfoItem label="Last Name" value={lastName!} />
          <InfoItem label="Address" value={address1!} />
          <InfoItem label="City" value={city!} />
          <InfoItem label="State/Province" value={stateProvince!} />
          <InfoItem label="ZIP/Postal Code" value={zipPostalCode!} />
          <DateInfoItem label="Date of Birth" value={dateOfBirth!} />
          <InfoItem label="SSN/SIN" value={ssnSin!} />
        </div>
      </CardContent>
    </Card>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <Label className="text-sm font-medium text-gray-500">{label}</Label>
      <p className="text-base font-semibold">{value}</p>
    </div>
  )
}

function DateInfoItem({ label, value }: { label: string; value: Date }) {
  return (
    <div className="space-y-1">
      <Label className="text-sm font-medium text-gray-500">{label}</Label>
      <p className="text-base font-semibold">{new Date(value).toDateString()}</p>
    </div>
  )
}

